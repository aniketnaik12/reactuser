
import { useEffect, useState } from "react";
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap";
const User = (props) => {

    let [user, setUser] = useState();

    useEffect(() => {
       
        let getUser = async () => {
            await fetch(`https://api.github.com/users/${props.username}`)

                .then(response => response.json())
                .then(response => setUser(response))
                .catch(error => console.error(error))
        }
        getUser()
    }, [props.username])

    return (
        <Container>
            <Row>
                {user && (
                    <Col className="mt-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={user?.avatar_url} />
                            {user?.name && (
                                <Card.Body>
                                    <Card.Title>{user?.name}</Card.Title>
                                </Card.Body>
                            )}
                            <ListGroup className="list-group-flush">
                                {user?.location && (
                                    <ListGroup.Item>Location: {user?.location}</ListGroup.Item>
                                )}
                                {user?.public_repos && (
                                    <ListGroup.Item>Public Repos: {user?.public_repos}</ListGroup.Item>
                                )}
                                {user?.followers && (
                                    <ListGroup.Item>Followers: {user?.followers}</ListGroup.Item>
                                )}
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={user?.html_url} target="_blank">{user?.html_url}</Card.Link>
                            </Card.Body>
                        </Card>

                    </Col>
                )}

            </Row>
        </Container>
    )
}

export default User;