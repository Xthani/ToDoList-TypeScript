import { useState } from "react";
import { useAppSelector } from "../../hooks";
import AuthorizationForm from "../registrationForm/AuthorizationForm";
import RegistrationForm from "../registrationForm/RegistrationForm";
import TaskList from "./TaskList/TaskList";

const Page = () => {
    const { userVerification } = useAppSelector((state: any) => state.todos);
    const [reg, setReg] = useState(true)

    return (
        <>
            {userVerification[0] ? <TaskList /> :
                <div className="Registration-Form-wrapper">
                    <button
                        onClick={() => setReg(prev => !prev)}
                        className="registration" >{!reg ? 'Есть аккаунт' : 'Регистрация'}</button>
                    {!reg ? <RegistrationForm /> : <AuthorizationForm />}
                </div>
            }

        </>
    )
}

export default Page;