import styled from "styled-components";
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { useEffect, useState } from "react";
import { supabase } from "../services/supaBaseClient";

// Genera un usuario si no existe y lo almacena en el LocalStorage.
const getUserId = () => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) return storedUserId;

    const newUserId = `user_${Date.now()}`;
    localStorage.setItem("userId", newUserId);
    return newUserId;
};

export function Like({ projectId, projectName }) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    //userId debería captar la IP del usuario que da like
    //para identificarlo de manera única y permitirle
    //que sea el único que pueda quitar el like
    const userId = getUserId();

    //Ejecuta una consulta a la tabla Likes
    //para conocer el total de likes por projecto.
    useEffect(() => {
        const fetchLikes = async () => {
            const { data, error } = await supabase
                .from("Likes")
                .select("*")
                .eq("user_id", userId)
                .eq("project_id", projectId)
                .eq("project_name", projectName);

            if (error) console.error(error);
            else setLikes(data.length);
            const userLike = data.find((like) => like.user_id === userId);
            setLiked(!!userLike);
        };
        fetchLikes();
    }, [projectName, userId]);

    //Actualiza el contador de likes y elimina o inserta
    //una nueva fila a la tabla "Likes"
    const toggleLike = async () => {
        if (liked) {
            const { error } = await supabase
                .from("Likes")
                .delete()
                .eq("user_id", userId)
                .eq("project_id", projectId)
                .eq("project_name", projectName);

            if (error) console.error(error);
            else setLikes((prev) => prev - 1);
        } else {
            const { error } = await supabase.from("Likes").insert({
                project_id: projectId,
                project_name: projectName,
                user_id: userId,
            });
            if (error) console.error(error);
            else setLikes((prev) => prev + 1);
        }
        setLiked(!liked);
    };

    return (
        <Container>
            <Counter>
                <span>{likes}</span>
            </Counter>
            <IconWrapper onClick={toggleLike}>
                {liked ? (
                    <HiHeart className="filled" />
                ) : (
                    <HiOutlineHeart className="outline" />
                )}
            </IconWrapper>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
    right: 1rem;
    top: 1rem;
`;

const Counter = styled.div`
    span {
        color: var(--secondary-text);
        font-weight: var(--font-weight-medium);
    }
`;

const IconWrapper = styled.div`
    display: grid;
    place-items: center;
    svg {
        grid-area: 1 / 1;
        font-size: 1.5rem;
        color: var(--secondary-text);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }
    svg:hover {
        transform: scale(1.3);
    }
    .outline {
        opacity: ${({ liked }) => (liked ? 0 : 1)};
    }
    .filled {
        color: #e5383b;
        opacity: ${({ liked }) => (liked ? 0 : 1)};
    }
`;
