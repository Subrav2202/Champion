import React,{useState} from "react";
import { Button,Table } from "react-bootstrap";
import ModalRole from "./ModalRole";
import './roleStyle.scss'

function Roles() {
    const data = [
        { role: "CTO" ,description: "Managing the technical aspects of an organisation" },
        { role: "Director", description: "Manage company's business and affairs" },
        { role: "Team Lead",description: "Role is to provide guidance, support and direction to team members" },
        { role: "Associate Team Lead", description: "Assist the team leader in managing sales teams and performing daily business operations" },
        { role: "Mentor", description: " Advise people in order to develop their skills as a teacher, manager, strategist, or consultant." },
        { role: "Developer",description: "" },
    ]
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState()
    const [currentData, setCurrentData] = useState()
    const [roleData, setRoleData] = useState({
        role: "",
        description: ""
    })

    const handleRoleData = (e) => {
        const value = e.target.value;
        setRoleData((roleData)=>{
            return({
                ...roleData,
                [e.target.name]: value,        
            })
        });
        console.log(roleData)
    }
    
    const handleAddModal = (type) => {
        setShowModal(true)
        setModalType(type)
    }
  
    const handleEditModal = (data,type) => {
        setShowModal(true)
        setModalType(type)
        setCurrentData(data)
    }
    return (
        <>
            <div>
                <Button className="add-btn" onClick={() => handleAddModal("add")} >Add</Button><br/>
                <Table striped bordered hover style={{border: "black"}}>
                    <thead style={{backgroundColor: "#1a152e",color :"white"}}>
                        <tr align="center">
                            <th>Sr no.</th>
                            <th>Roles</th>
                            <th>Description</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((val,index) => {
                                return (
                                    <tr key={index}>
                                    <td align="center">{index+1}</td>
                                    <td align="center">{val.role}</td>
                                    <td>{val.description}</td>
                                    <td>
                                        <Button onClick={() => handleEditModal(val,"edit")} className="edit-btn">Edit</Button>
                                        <Button className="delete-btn">Delete</Button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <ModalRole showModal={showModal} setShowModal={setShowModal}
                modalType={modalType} currentData={currentData}
                roleData={roleData} setRoleData={setRoleData} handleRoleData={handleRoleData}
            />
        </>
    )
}

export default Roles
