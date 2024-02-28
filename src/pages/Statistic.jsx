import React from 'react'
import hamroyev from "../assets/hamroyev.jpg"
const Statistic = () => {
    return (
        <div>
            <div className="stats shadow w-full">
                <div className="stat text-white">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title text-white">O'quvchilar soni</div>
                    <div className="stat-value ">300</div>
                    <div className="stat-desc"><span className='text-green-500'>+146</span> so'ngi bir oyda qo'shilganlar</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Kursni to'liq tugatganlar</div>
                    <div className="stat-value text-white">124</div>
                    <div className="stat-desc"><span className='text-green-500'>+21%</span> so'ngi bir oyda qo'shilganlar</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src={hamroyev}/>
                            </div>
                        </div>
                    </div>
                    <div className="stat-title">Shuhrat Hamroyev</div>
                    <div className="stat-value text-white">21</div>
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
                        <tr>
                            <th>1</th>
                            <td>Shuhrat Hamroyev</td>
                            <td>@setriin</td>
                            <td>100%</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Asliddin</td>
                            <td>@asliddin</td>
                            <td>90%</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Jamshid</td>
                            <td>@jamik1212</td>
                            <td>89%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Statistic