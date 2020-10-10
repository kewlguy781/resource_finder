import React,{ useState, useEffect } from "react"
import axios from "axios"

const BusinessView = ({match, history}) => {
const [entries, setEntries] = useState([])
const [comments, setComments] = useState([])

useEffect(() => {
    axios
    .get(`/api/entries/${match.params.id}`)
    .then((res) => {
        setEntries(res.data)
    })
    .catch((err) => {
        alert("Error Setting Entry")
    })

    axios
    .get(`/api/entries/${match.params.id}/comments`)
    .then((res) => {
        setComments(res.data)
    })
    .catch((err) => {
        alert("Error Setting Comments")
    })
})

// const renderComments = () =>
// return comments.map((comment) => (
    // <Comment key={comment.id} comment={comment} />
// ))

const renderBusinessInfo = () => (
    <div>
        <h1>entries.name</h1>a
    </div>
)

    return( 
        <div>
            {renderBusinessInfo()}
        </div>
    )
}
export default BusinessView;