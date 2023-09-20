import styled from 'styled-components'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
export const Image = ({...imgProps}) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id:imgProps.id})
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }
  return (
    <Img ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <img src={imgProps.src} alt={imgProps.alt}/>
        <a href={imgProps.photographer_url} className="photographer">
            <span>{imgProps.photographer}</span>
        </a>
        <div className="gradient"></div>
    </Img>
  )
}
const Img = styled.div`
    width: 100%;
    height: 20rem;
    overflow:hidden;
    max-height: 300px;
    display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding:1rem;
    border-radius: 10px;
    position:relative;
    img{
        position: absolute;
        inset:0;
        height: 100%;
        width: 100%;
        object-fit: cover;
        z-index:0;
    }
    .photographer{
        position:relative;
        z-index:5;
        display: flex;
        align-items: center;
        justify-content: center;
        gap:5px;
        text-decoration: none;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }
        span{
            color: #fff;
            font-size: 14px;
            font-weight: 600;
        }
    }
    .gradient{
        position: absolute;
        inset:0;
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%);
        z-index: 1;
    }
`
