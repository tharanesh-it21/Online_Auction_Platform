import React, { useEffect, useState } from 'react'
import { Avatar, Badge, message } from 'antd'
import { GetCurrentUser } from '../apicalls/users'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { SetLoader } from '../redux/loadersSlice'
import { SetUser } from '../redux/usersSlice'
import Notifications from './Notifications'
import { GetAllNotifications } from '../apicalls/notifications'

//import { useHistory } from 'react-router-dom';

function ProtectedPage({ children }) {
    const [notifications = [], setNotifications] = useState([]);
    const [showNotifications, setShowNotifications] = useState(false);
    const { user } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const validateToken = async () => {
        try {
            dispatch(SetLoader(true));
            const response = await GetCurrentUser()
            dispatch(SetLoader(false))
            if (response.success) {
                dispatch(SetUser(response.data))
            } else {
                navigate("/login");
                message.error(response.message)
            }
        } catch (error) {
            dispatch(SetLoader(false));
            navigate("/login");
            message.error(error.message)

        }
    };

    const getNotifications = async () => {
        try {
            dispatch(SetLoader(true));
          const response = await GetAllNotifications();
             dispatch(SetLoader(false));
          if (response.success) {
            setNotifications(response.data);
          } else {
            throw new Error(response.message);
          }
        } catch (error) {
            dispatch(SetLoader(false));
          message.error(error.message);
        }
      };

    useEffect(() => {
        if (localStorage.getItem("token")) {
            validateToken();
            getNotifications();
        } else {

            navigate("/login");
        }
    }, []);



    return (
        user && (
            <div>


                {/* header */}
                <div className='flex justify-between items-center bg-primary p-5 '>
                    <h1 className='text- 2xl text-white cursor-pointer' onClick={() => navigate("/")}>
                        AUCTION-MASTERZ
                    </h1>
                    <div className='bg-white py-2 px-5 rounded flex gap-1 items-center'>
                        {/* <i className="ri-shield-user-line"></i> */}
                        <span className='underline cursor-pointer uppercase'
                            onClick={() => {
                                if (user.role === 'user') {
                                    navigate("/profile");
                                } else {
                                    navigate("/admin")
                                }
                            }}>
                            {user.name}</span>

                        <Badge count={notifications?.filter((notification) => !notification.read).length}
                        onClick={() => setShowNotifications(true)}
                        className='cursor-pointer'
                        >
                            <Avatar shape="circle" 
                            icon={<i className="ri-notification-3-line text-red-500"></i>}
                            />
                        </Badge>



                        <i
                            className="ri-logout-circle-r-line ml-10 cursor-pointer"
                            onClick={() => {
                                localStorage.removeItem("token");
                                navigate("/login");
                            }}
                        ></i>


                    </div>
                </div>

                <div className='p-5'>{children}</div>

                    {<Notifications
                       notifications={notifications}
                       reloadNotifications={setNotifications}
                       showNotifications={showNotifications}
                       setShowNotifications={setShowNotifications}
                       />    
                }

            </div>
        )

    );
};

export default ProtectedPage
