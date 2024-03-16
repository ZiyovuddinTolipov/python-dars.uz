import hamroyev from "../assets/hamroyev.jpg";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Statistic = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const headers = {
                "Authorization": `Token ${localStorage.getItem('token')}`
            };
            try {
                // console.log(headers);
                const response = await axios.get(`https://pycourse.pythonanywhere.com/v1/getusers/`, { headers });
                // console.log(response.data[7].completed.lessons.length); // Ma'lumotlarni ko'rish
                setUsers(response.data)
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // fetchData funksiyasini chaqirish
    }, []); // useEffect ning ikkinchi argumenti tomonidan o'rnatingan massiv bo'sh qolgan, shuning uchun, bu useEffect komponenti yaratilganda faqat bir marta ishga tushadi

    return (
        <div>
            <div className="stats bg-slate-900 shadow w-full flex lg:flex-row flex-col">
                <div className="stat  text-white">
                    <div className="stat-figure text-primary hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title text-white">O'quvchilar soni</div>
                    <div className="text-2xl font-semibold">300</div>
                    <div className="stat-desc"><span className='text-green-500'>+146</span> so'ngi bir oyda qo'shilganlar</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Kursni to'liq tugatganlar</div>
                    <div className="text-2xl font-semibold text-white">124</div>
                    <div className="stat-desc"><span className='text-green-500'>+21%</span> so'ngi bir oyda qo'shilganlar</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary hidden md:block">
                        <div className="avatar online">
                            <div className="w-10 md:w-16 rounded-full">
                                <img src={hamroyev} />
                            </div>
                        </div>
                    </div>
                    <div className="stat-title">Shuhrat Hamroyev</div>
                    <div className="text-2xl font-semibold text-white">21</div>
                    <div className="stat-desc "><span className='text-green-500'>+21%</span> so'ngi bir oyda qo'shilganlar</div>
                </div>

            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>FISH</th>
                            <th>@username</th>
                            <th>Tugallangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {users.map(user => (
                            
                                user.id !== 1 && 
                                    <tr key={user.id}>
                                        <td>{user.id-1}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.completed.length}</td>
                                    </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Statistic