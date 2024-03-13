import { useState } from "react";
export default function Player({initialName,symbol,isActive,onChangeName}) {

    const[playerName,setPlayerName]=useState(initialName)
    const [isEditing,setIsEditing]= useState(false)

    let buttonValue="Edit"
    let editablePlayerName=<span className="player-name">{playerName}</span>

    function handleChange(event){
      setPlayerName(event.target.value)
    }
    function handleEditClick(){
        // (isEditing? setIsEditing(false) :setIsEditing(true))
        //  or we can do below that is best practice in react to call upadting stae function on basis of older value
        setIsEditing((editing)=> !editing)
        if(isEditing)
        {
            onChangeName(symbol,playerName)
        }
     }
     if(isEditing){

        buttonValue="Save"
        editablePlayerName=<input type="text" required value={playerName} onChange={handleChange} />
     }
     else
     {
        buttonValue="Edit"
        editablePlayerName=<span className="player-name">{playerName}</span>
     }

    return <li className={isActive ? 'active' : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick} >{buttonValue}</button>
    </li>
}
