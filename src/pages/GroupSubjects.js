import React, { useState, useEffect }  from 'react'

import axios from 'axios';

import { ListGroup } from 'react-bootstrap';

const GroupSubjects = (props) => {
    const { match: { params } } = props;
    const groupId = params.groupId;

    const [subjects, setSubjects] = useState([])
    //console.log(subjects)

    const fetchData = () => {
        console.log(`GROUP_ID: ${groupId}`)

        axios.post('http://localhost:5000/group/subjects', {id: parseInt(groupId)} )
            .then(res => setSubjects(res.data))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <ListGroup>
                {
                    subjects.length !== 0 &&
                    subjects.map(subject => {
                        return (
                            <ListGroup.Item key={subject.group_subject.id} action variant='info' >{subject.subject.name}</ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </div>
    )
}

export default GroupSubjects