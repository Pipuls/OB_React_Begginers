import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../service/chuckService';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const ChuckJokes = () => {

    const [chuckJoke, setChuckJoke] = useState(null);
    const [positiveCount, setPositiveCount] = useState(0);
    const [negativeCount, setNegativeCount] = useState(0);

    useEffect(() => { obtainJoke() }, []);

    const obtainJoke = () => {
        getRandomJoke()
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data.value)
                    setChuckJoke(response.data)
                }
            })
            .catch((error) => {
                alert(`Algo salio mal: ${error}`)
            })
    }

    const onCount = (setCounter, counter) => {
        setCounter = (counter + 1);
        obtainJoke();
    }

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >

            <Card
                sx={{
                    width: 500,
                    height: 500,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '20px',
                }}
                variant="outlined"
            >
                <h3>Chistes de Chuck Norris</h3>
                <img alt='Avatar' src={chuckJoke.icon_url}/>
                <CardContent>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        {chuckJoke !== null ?
                            (
                                <div>
                                    <p>{chuckJoke.value}</p>
                                </div>
                            )
                            : null}
                    </Typography>
                    <CardActions 
                        style={{ display: 'flex', 
                                justifyContent: 'center',
                                alignItems: 'center', }}>
                        <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
                            <ThumbUpIcon color="success"
                                onClick={() => { onCount(setPositiveCount(positiveCount + 1)) }}
                            /> {positiveCount}
                            </div>
                        <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', alignItems: 'center' }}>
                            <ThumbDownIcon variant="contained" color="error"
                                onClick={() => { onCount(setNegativeCount(negativeCount + 1)) }}/> 
                                {negativeCount}
                        </div>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    );
}

export default ChuckJokes;
