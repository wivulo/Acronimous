interface iProp{
    item?: any;
    tb?: string;
}

interface iUser{
    id: number;
    username: string;
    password: string;
}

interface iLibrary{
    title: string;
    actor: string;
    file: any;
    description: string;
    interactions: any;
}

interface iDb{
    users: iUser[];
    library: iLibrary[];
    forum: any[];
}

const config = {
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
}

/*
const lastId =  (uri: string) => {
    return new Promise<number>((resolve, reject) => {
        fetch('/'+uri, config)
        .then(res => res.json())
        .then((data: any[]) => {
            let id = 0

            for(let _tb of Object.keys(data[0])){
                if(tb === _tb){
                    data[0][_tb].map((item: any) => id += item.id)

                    resolve(id)
                }else{
                    resolve(0)
                }
            }
        })
        .catch(e => reject(e))
    })

}*/

const getData = ({uri,tb}: any) => {
   return new Promise<any>((resolve, reject) => {
        fetch('/'+uri, config)
        .then(res => res.json())
        .then((data: any[]) => {
           // resolve(data[0])
            for(let _tb of Object.keys(data[0])){
                if(tb === _tb)
                    resolve({data: data[0][_tb], status: true})
                else
                    resolve({status: false})
            }
        })
        .catch(e => reject(e))
    }) 
}


const addData = ({item, tb}: iProp) => {
   return new Promise<any>((resolve, reject) => {
       if(item){
           fetch('/addData', {
               method: 'POST',
               body: item
           })
          .then(response => response.json())
          .then(data => resolve(data))
          .catch(error => reject(error))
        }else{
            reject({message: 'corpo vazio!'})
        }
   }) 
}


const getDataById = ({item, tb}: iProp) => {
    return new Promise<any>((resolve, reject) => {
        
        let id = Number(item);

        if(id){
        
        }
    })
}

export {getData}
