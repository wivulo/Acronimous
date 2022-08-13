interface iProp{
    item?: any;
    tb?: number;
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
    add: any;
    delete: any;
    search: any;
    lastId: any;
}

const lastId =  (tbIndex: number) => {
    if(tbIndex in data){
        let id = 0;
        data[tbIndex].map(item => id += item.id)
                
        return id
    }
}

const getData = () => {}

const addData = ({item, tb = 0}: iProp) => {
    let lastid = db().lastId(tb) || 0

    if(item){
        item.id = lastid + 1;

        let isAdd = data[tb].push(item)
        if(isAdd) return item
    }
}

const searchData = ({item, tb = 0}: iProp) => {
    let id = Number(item);

    if(id){
        for(let i of data[tb]){
            if(id === i.id) return i
        }
    }
}

export {getData, addData, searchData}
