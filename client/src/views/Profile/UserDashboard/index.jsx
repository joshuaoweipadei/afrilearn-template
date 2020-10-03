import React, { useState, useEffect } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem  } from 'reactstrap'
import { useSnackbar } from 'notistack';

import { accountService } from '../../../_services'

function Dashboard(){
    const user = accountService.userValue
    const [users, setUsers] = useState([])
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        let isSubscribed = true;
        accountService.getAll().then(users => {
            if(isSubscribed){
                setUsers(users.filter(x => x._id !== user.id))
            }
        })
        return () => isSubscribed = false;
    }, [])

    const handleDeleteUser = (id) => {
        accountService.deleteUser(id).then(() => {
            setUsers(users.filter(user => user._id !== id))
            enqueueSnackbar("Deleted user", {
                variant: 'success', autoHideDuration: 3000, preventDuplicate: true,
                anchorOrigin: { horizontal: "right", vertical: "top" }
            });
        })
    }

    return (
        <Container>
            <Row>
                <Col md="12">
                    <div className="profile">
                        <div className="title">
                            <h4>Welcome to your dashboard, <span className="login-user">{user.firstname+" "+user.lastname}</span></h4>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </div>

                        <div className="users-lists">
                            <h5>All Registered User</h5>
                            {users &&
                            <ListGroup>
                                {users.map((user, i) => (
                                    <ListGroupItem className="user-item" key={i}>
                                        <div className="user-name">
                                            <span>{++i})</span> {user.firstname+" "+user.lastname}
                                        </div>
                                        <i onClick={() => handleDeleteUser(user._id)} className="fa fa-trash"></i>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;