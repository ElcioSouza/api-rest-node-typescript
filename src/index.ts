// arquivo principal, para rodar yarn ts-node-dev ./src/index.ts
import { App } from './server/App';


App.listen(3333,()=>console.log("App rodando!"))