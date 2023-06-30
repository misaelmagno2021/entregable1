
const UserCard = ({data}) => {

    return (
        <article className="user-card">

            <h1 className="title">GALLETAS DE LA FORTUNA</h1>
            
            <p className="text">{data.phrase}</p>

            <h5 className="author">Fuente: {data.author}</h5>
        
        </article>
    )
}

export default UserCard