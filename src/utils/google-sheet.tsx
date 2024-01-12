// import { GoogleSpreadsheet } from 'google-spreadsheet';

// const doc = new GoogleSpreadsheet('<the sheet ID from the url>', serviceAccountAuth);

// await doc.loadInfo(); // loads document properties and worksheets
// console.log(doc.title);
// await doc.updateProperties({ title: 'renamed doc' });

// const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
// console.log(sheet.title);
// console.log(sheet.rowCount);

// // adding / removing sheets
// const newSheet = await doc.addSheet({ title: 'another sheet' });
// await newSheet.delete();