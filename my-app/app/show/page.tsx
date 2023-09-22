import {Word,columns} from "./columns"
import { DataTable } from "./data-table"


async function getData():Promise<Word[]>{
    return [
        {
            bhutia:"chad",
            english:"chad",
            pronounciation:"chad",
        },
        {
bhutia: "Aiden",
english: "Oliver",
pronounciation: "Ethan",
},

{
bhutia: "Mia",
english: "Sophia",
pronounciation: "Liam",
},

{
bhutia: "Ella",
english: "Lucas",
pronounciation: "Aria",
},

{
bhutia: "Logan",
english: "Harper",
pronounciation: "Sebastian",
},

{
bhutia: "Ava",
english: "Mason",
pronounciation: "Zoe",
},

{
bhutia: "William",
english: "Avery",
pronounciation: "Benjamin",
},

{
bhutia: "Sofia",
english: "Lily",
pronounciation: "Matthew",
},

{
bhutia: "Ethan",
english: "Evelyn",
pronounciation: "Olivia",
},

{
bhutia: "Grace",
english: "Noah",
pronounciation: "James",
},

{
bhutia: "Henry",
english: "Emma",
pronounciation: "Charlotte",
},

{
bhutia: "Liam",
english: "Aria",
pronounciation: "Luna",
},

{
bhutia: "Zoe",
english: "Michael",
pronounciation: "Eli",
},

{
bhutia: "Lucas",
english: "Abigail",
pronounciation: "Ava",
},

{
bhutia: "Olivia",
english: "Ethan",
pronounciation: "Lily",
},

{
bhutia: "Ella",
english: "Mia",
pronounciation: "Benjamin",
},

{
bhutia: "Mason",
english: "Sofia",
pronounciation: "Matthew",
},

{
bhutia: "Liam",
english: "Grace",
pronounciation: "Zoe",
},

{
bhutia: "Ava",
english: "Oliver",
pronounciation: "Aria",
},

{
bhutia: "Ethan",
english: "Charlotte",
pronounciation: "Luna",
},

{
bhutia: "Mia",
english: "Evelyn",
pronounciation: "James",
},

{
bhutia: "William",
english: "Lucas",
pronounciation: "Eli",
},

{
bhutia: "Sofia",
english: "Harper",
pronounciation: "Noah",
},

{
bhutia: "Ella",
english: "Avery",
pronounciation: "Ava",
},

{
bhutia: "Logan",
english: "Lily",
pronounciation: "Zoe",
},

{
bhutia: "Ava",
english: "Mason",
pronounciation: "Matthew",
},

{
bhutia: "William",
english: "Sophia",
pronounciation: "Ethan",
},

{
bhutia: "Liam",
english: "Evelyn",
pronounciation: "Olivia",
},

{
bhutia: "Ella",
english: "Aria",
pronounciation: "Benjamin",
},

{
bhutia: "Lucas",
english: "Oliver",
pronounciation: "Lily",
},

{
bhutia: "Zoe",
english: "Luna",
pronounciation: "Michael",
},

{
bhutia: "Olivia",
english: "Noah",
pronounciation: "Eli",
},

{
bhutia: "Liam",
english: "Mia",
pronounciation: "Ava",
},

{
bhutia: "Henry",
english: "Ethan",
pronounciation: "James",
},

{
bhutia: "Ella",
english: "Sofia",
pronounciation: "Charlotte",
},

{
bhutia: "Mason",
english: "Avery",
pronounciation: "Lily",
},

{
bhutia: "Sofia",
english: "Harper",
pronounciation: "Matthew",
},

{
bhutia: "Liam",
english: "Grace",
pronounciation: "Zoe",
},

{
bhutia: "Ava",
english: "Oliver",
pronounciation: "Aria",
},

{
bhutia: "Ethan",
english: "Charlotte",
pronounciation: "Luna",
},

{
bhutia: "Mia",
english: "Evelyn",
pronounciation: "James",
},

{
bhutia: "William",
english: "Lucas",
pronounciation: "Eli",
},

{
bhutia: "Sofia",
english: "Avery",
pronounciation: "Noah",
},

{
bhutia: "Ella",
english: "Lily",
pronounciation: "Ava",
},

{
bhutia: "Logan",
english: "Mason",
pronounciation: "Zoe",
},

{
bhutia: "Ava",
english: "Sophia",
pronounciation: "Matthew",
},

{
bhutia: "William",
english: "Evelyn",
pronounciation: "Ethan",
},

{
bhutia: "Liam",
english: "Aria",
pronounciation: "Olivia",
},

{
bhutia: "Ella",
english: "Noah",
pronounciation: "Benjamin",
},

{
bhutia: "Lucas",
english: "Oliver",
pronounciation: "Lily",
},

{
bhutia: "Zoe",
english: "Luna",
pronounciation: "Michael",
}
    ]
}


export default async function DemoPage(){
    const data= await getData()


    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data}/>
        </div>
    )
}