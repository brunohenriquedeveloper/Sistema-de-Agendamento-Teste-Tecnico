import { title } from "process";
import React from "react";

function MiniSidebar() {    

    const navItems = [
        {
            icon: <IconGrid />,
            title: "Todos",
            link: "/",
        }, 
        {   
            icon: <IconFileCheck strokeColor={getStrokeColor("/concluido")}/>,
            title: "Concluído",
            link: "/concluido",
            
        },
        {   
            icon: <IconCheck strokeColor={getStrokeColor("/pendente")}/>,   
            title: "Pendente",
            link: "/pendente",
        },
        {   
            icon: <IconStopwatch strokeColor={getStrokeColor("/atrasado")}/>,   
            title: "atrasado",
            link: "/atrasado",
        },



    ]
    return (
        <div>MiniSidebar</div>
    )
}

export default MiniSidebar;