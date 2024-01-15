// codigo base do nosso servidor  para rodar o servidor

import express from 'express';

const App = express();

App.get('/',(req,res)=> res.send("OLA, DEV!"));


export {App};

