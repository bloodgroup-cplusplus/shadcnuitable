"use client"

import {ColumnDef} from "@tanstack/react-table"
import {ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"


export type Word = {
    bhutia:string,
    english:string,
    pronounciation:string,
}


export const columns: ColumnDef<Word>[] = [
    {
        accessorKey:"bhutia",
        header:"Bhutia"
         
        
    },
    {
        accessorKey:"english",
        header:({column})=>{
            return (
                <Button 
                    variant="ghost"
                    onClick={()=>column.toggleSorting(column.getIsSorted()==="asc")}
                    >
                        English
                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                    </Button>
            )
        },
    },
    {
        accessorKey:"pronounciation",
        header:"Pronounciation",
    },
    {
        id:"actions",
        cell:({row}) =>{
            const word = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant = "ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open Menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={()=>navigator.clipboard.writeText(word.bhutia)}
                        >
                            Copy Word
                        </DropdownMenuItem>
                        <DropdownMenuItem>Update Word</DropdownMenuItem>
                        <DropdownMenuItem>Delete Word</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]

