import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const BubbleSort = () => {
  const [array, setArray] = useState([]);
  const [currIndexes, setCurrIndexes] = useState({ curr: '', prev: '' });
  const [isSorted, setIsSorted] = useState(false);
  const [props, setProps] = useState({
    size: '',
  });

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const checkSorted = () => {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const bubbleSort = async () => {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        setCurrIndexes({ curr: j, prev: '' });
        if (array[j] > array[j + 1]) {
          swap(j, j + 1);
          setCurrIndexes({ curr: j, prev: j + 1 });
        }
        await delay(3000 / array.length);
      }
    }
    if (checkSorted()) {
      setIsSorted(true);
      for (let i = 0; i < array.length; i++) {
        setCurrIndexes({ curr: i, prev: '' });
        await delay(2000 / array.length);
      }
    }
  };

  const swap = (i, j) => {
    let tempArr = array;
    [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    setArray(tempArr);
  };

  const initArray = () => {
    let tempArr = [...Array(props.size).keys()].map((x) => x + 1);
    for (var i = tempArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    setArray(tempArr);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '2%',
        flex: '1',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', gap: '5px', marginBottom: '2em' }}>
        <TextField
          label="Array Size"
          type="number"
          value={props.size}
          onChange={(e) =>
            setProps({
              ...props,
              size: isNaN(e.target.valueAsNumber) ? '' : e.target.valueAsNumber,
            })
          }
        />
        <Button
          onClick={initArray}
          variant="contained"
          disabled={props.size === ''}
        >
          Create
        </Button>
        <Button
          onClick={bubbleSort}
          variant="contained"
          disabled={!array.length}
        >
          Sort
        </Button>
      </Box>
      <Box sx={{ display: 'flex', gap: '5px', flex: '1' }}>
        {array.map((element, idx) => (
          <Box
            key={idx}
            sx={{
              width: `calc(100% / ${array.length})`,
              height: `calc((100% * ${element})/${array.length})`,
              backgroundColor:
                idx === currIndexes.curr || idx === currIndexes.prev
                  ? isSorted
                    ? 'green'
                    : '#7272FA'
                  : '#A6A2A2',
              display: 'inline-block',
              alignSelf: 'flex-end',
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default BubbleSort;
