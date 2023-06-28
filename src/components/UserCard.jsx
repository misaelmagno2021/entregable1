
const UserCard = ({data}) => {

    return (
        <article className="user-card">

            <h1 className="title">GALLETAS DE LA FORTUNA</h1>
            
            <h3 className="text">{data.phrase}</h3>

            <h5 className="author">Fuente: {data.author}</h5>
        
        </article>
    )
}

export default UserCard