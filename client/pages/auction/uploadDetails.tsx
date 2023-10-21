"use client"

import React, { useState } from 'react';
import { read, utils } from 'xlsx';
import { IconButton } from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons';

interface ExcelData {
  [key: string]: any;
}

const uploadDetails: React.FC = () => {
  const [jsonData, setJsonData] = useState<ExcelData[] | null>([]);
  const[added,setAdded] = useState<boolean>(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target?.result as ArrayBuffer;

        try {
          const workbook = read(data, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const dataJSON: ExcelData[] = utils.sheet_to_json(worksheet);
          setJsonData(dataJSON);
          setAdded((prevAdd)=>!prevAdd)
        } catch (error) {
          console.error('Error reading the file:', error);
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '250px' }}>
      <input type="file" placeholder="upload xlsx" accept=".xlsx" onChange={(e) => handleFileUpload(e)} />
      {added &&
      <IconButton
      colorScheme='green'
      aria-label='Search database'
      icon={<CheckIcon style={{color:'green'}}/>}
      style={{borderRadius:'50%'}}
      />
      }
    </div>
  );
};
 
export default uploadDetails;