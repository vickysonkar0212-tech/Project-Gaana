import OldSlider from "../pages/OldSlider";
import Oldslider from "../data/Oldslider.json";

const Newsong = ({ data }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col ">

                        <header className="oldgaana Newtop ">Gaana
                            <svg width="5" className="ms-2" height="8" viewBox="0 0 10 17"><path class="svg_color" fill="#000" fill-rule="evenodd" d="M1.414 0L0 1.414l7 7-7 7 1.414 1.414 8.414-8.414z"></path></svg> <u> New Songs 2024</u></header>
                        <h2 className="mt-2">{data.title}</h2>
                        <div className="py-3">
                            {Oldslider &&
                                <OldSlider items={Oldslider} />
                            }
                        </div>
                        <div className="d-flex">
                            {data.songs.map((song) => (
                                <div className="px-4" key={song.id}>
                                    <img src={song.image} alt={song.title} className="image-1" />
                                    <p className="mt-2  ">{song.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex">
                            {data.songs.map((song) => (
                                <div className="px-4" key={song.id}>
                                    <img src={song.image} alt={song.title} className="image-1" />
                                    <p className="mt-2  ">{song.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex">
                            {data.songs.map((song) => (
                                <div className="px-4" key={song.id}>
                                    <img src={song.image} alt={song.title} className="image-1" />
                                    <p className="mt-2  ">{song.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex">
                            {data.songs.map((song) => (
                                <div className="px-4" key={song.id}>
                                    <img src={song.image} alt={song.title} className="image-1" />
                                    <p className="mt-2  ">{song.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex">
                            {data.songs.map((song) => (
                                <div className="px-4" key={song.id}>
                                    <img src={song.image} alt={song.title} className="image-1" />
                                    <p className="mt-2  ">{song.title}</p>
                                </div>
                            ))}
                        </div>
                        <div className="d-flex">
                            {data.songs.map((song) => (
                                <div className="px-4" key={song.id}>
                                    <img src={song.image} alt={song.title} className="image-1" />
                                    <p className="mt-2  ">{song.title}</p>

                                </div>
                            ))}
                        </div>

                    </div>
                    <hr />
                </div>
            </div>
            <p className="newfs mt-3 px-3"> Songs have always had a special place in our lives. They are the ones that add more depth and meaning to our feelings. Be it a wedding, a party, a festival, or any other occasion, songs are the main element which adds the right kind of vibe to it. Whether we twerk on London Thumakda or sing along with our friends on Gaal Ni Kadni or do a headbang on Turn Down For What or dance in the rain with our partners on Tum Se Hi, all these moments become special by one thing, i.e., songs.    Living in a bilingual country, we have songs in different languages like Hindi, Punjabi, Gujarati, Marathi, Tamil, Telugu, Kannada, Malayalam, Assamese, Bengali, Bhojpuri, Malayalam and many more. All these are popular in their respective regions as well as around the world. Every type of song has its qualities which makes it different from the others.    New songs come up now and then, just like all the other things in the world. New songs always take our hearts away and make us humm along with them for days. With new verses and melodious tunes, these new songs never bore us from our usual playlist. Some of the new Hindi songs which are currently on everyone’s mind are bairiya, jhoome jo pathaan, besharam rang, maan meri jaan, Kho jaane de, apna bana le and the list goes on. If you are looking for the latest English songs, then you must listen to When I’m Gone, Wait, Echoes of Silence, The Dreaming, Fighting Demons, Scenic Drive, World of Walker, Wild Dreams (Deluxe Edition), 30, and many more. These tracks are perfect to add to your “hood playlist”. For all the ones who cannot do without Punjabi songs, you cannot afford to miss these new Punjabi songs namely Tabahiyan, Arthi, No Guarantee, Raat Saari, Aaya Jado Da x Dholla, Mumtaz, and many more. Apart from these famous genres, there are new songs in other genres as well like Tamil, Telugu, Bhojpuri, Kannada, Malayalam, Kannada, etc.    Everyone loves to explore something new in their lives, even if it's music. These latest songs give people new tunes to groove on and new verses to hum along. All the music industries work pretty hard to make something new and innovative each time, which is liked by the audience. People get excited every time they come to know that a new song is coming up by their favorite singer. They cannot afford to miss it, and we cannot afford to make you miss these new and hit songs. Download and listen to all the new MP3 songs on Gaana.com.</p>
            <h5 className="mx-5 mt-5">You May Like You</h5>
            <hr />
            <div className="row d-flex px-5">
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/22226896/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyNS0wMi8xMDE5MjQvODJjM2EwZmRhYTA3MjE0MjI3ZGFjYmFiMTM4NDU2YTQuanBn.webp?v=1744221173-QC-wqjL0a_fOF2YlVJs4XzmHHI5CFjQyGl-xLq0STyg" alt="" />
                    </div>    <p>
                        टाइटनोबोआ या अनाकोंडा? कौन सा सांप है असल में सबसे विशाल?</p>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/22226896/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyNS0wMi8xMDE5MjQvODJjM2EwZmRhYTA3MjE0MjI3ZGFjYmFiMTM4NDU2YTQuanBn.webp?v=1744221173-QC-wqjL0a_fOF2YlVJs4XzmHHI5CFjQyGl-xLq0STyg" alt="" />
                    </div>    <p>
                        टाइटनोबोआ या अनाकोंडा? कौन सा सांप है असल में सबसे विशाल?</p>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/22226896/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyNS0wMi8xMDE5MjQvODJjM2EwZmRhYTA3MjE0MjI3ZGFjYmFiMTM4NDU2YTQuanBn.webp?v=1744221173-QC-wqjL0a_fOF2YlVJs4XzmHHI5CFjQyGl-xLq0STyg" alt="" />
                    </div>
                    <p>
                        टाइटनोबोआ या अनाकोंडा? कौन सा सांप है असल में सबसे विशाल?</p>
                </div>
            </div>
            <div className="row d-flex px-5">
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/21706729/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyNC0xMi8xMDE5MjQvNjZjMTA2ZDQzYzAyYTUwNjBkMWJiNmYyY2NmYzhlNDMuanBn.webp?v=1744221173-WRMxHpsZdFoeiDo3en8CrPWrrHqGvDoYT4hVFTrc7es" alt="" />
                    </div>
                    <p> Why Do Men Everywhere Love Curves? The Fascination Explained!</p>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/22859995/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ194eV9jZW50ZXIscV9hdXRvOmdvb2Qsd18xMDIwLHhfMTExOSx5XzgwNS9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyNS0wMy8xMDE5MjQvZmJkMjE5YTBjZTg5Yzc1NGNmMjE3YjQzZjMyODU3Y2IuanBn.webp?v=1744221173-SROa71NZTtRvvNXEgayMVEK4YenfkVjOACKMhHXRtds" alt="" />
                    </div>
                    <p>They Said It Wouldn’t Last—9 Reasons Age-Gap Love Works!</p>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/22226896/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyNS0wMi8xMDE5MjQvODJjM2EwZmRhYTA3MjE0MjI3ZGFjYmFiMTM4NDU2YTQuanBn.webp?v=1744221173-QC-wqjL0a_fOF2YlVJs4XzmHHI5CFjQyGl-xLq0STyg" alt="" />
                    </div>
                    <p> टाइटनोबोआ या अनाकोंडा? कौन सा सांप है असल में सबसे विशाल?</p>
                </div>
            </div>
            <div className="row px-5">
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/17126614/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyMy0wOS8xMDE5MjQvMWNmOTQ3NDMzYjJiNGQ3MDZlODgwOTNmMDgyMTMyNzkucG5n.webp?v=1744221173-i-8AJi2kccUMcS17J2ECEIiIjHt-SSLObUKdUgR8mLg" alt="" width="480px" />
                    </div>
                    <p>10 Things Women Will Only Do With Men They Love</p>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/19497476/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyNC0wNS8xMDE5MjQvOWNlZmJjNmRjZGVlNTdhMjdmYjQ5NDdjYThjNzZiYTguanBn.webp?v=1744221173-Wx7ja_GjweBwAkCbt4jjGaFohX1fnWtwzMGJ6spD5bY" alt="" width="480px" />
                    </div> <p>Are You With Your Soulmate? A Therapist Shares 2 Definitive Signs</p>
                </div>
            </div>
            <div className="row px-5">
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/18150832/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyMy0xMi8xMDE5MjQvZWE5ZmU4NTZhYWRlOTM2MTJlMDNiNmY3MDA3M2JiNmMuanBn.webp?v=1744221173-c8Sp7r8vw6dTuJmAwgyw5ipQ9v0bP4QW-arBIoO0hGU" alt="" width="480px" />
                    </div> <p>10 Things Women Will Only Do With Men They Love</p>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/2875769/492x277/72x24x491x276/aHR0cDovL2ltZ2hvc3RzLmNvbS90ZW1wLzIwMTgtMDctMzEvMTAxOTI0LzljYzFkN2MxMThjOGE2YmVhZDI5YjRmM2ExMmY0OTMxLmpwZWc.webp?v=1744221173-uswB6yDGzG9bcePvSvJ_8oyF7EgUyVXGCUsbV6eW4oc" alt="" width="480px" />
                    </div>
                    <p>12 Sure Signs He's Super Serious About You</p>
                </div>
            </div>
            <div className="row d-flex px-5">
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/3236898/492x277/0x50x590x332/aHR0cDovL2ltZ2hvc3RzLmNvbS90ZWFzZXIvMjAxOS0wMS0yNi8xMDE5MjQvMWI0YmM0YzEwYjgwZTIwYzIxYzhiZGZiMGNiNjI4ZjYucG5n.webp?v=1744221173-1OTquXwf85vx55HvGLth_bVKabzTg0FAChdgl-w_IGI" alt="" />
                    </div>
                    <p> 11 Ayurveda Health Secrets From Ancient India</p>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/14402983/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyMi0xMC8xMDE5MjQvNGRmMmE4MWRiODE2ODg2MjY2NjQ3MzdlZDE5NGM4ODQuanBlZw.webp?v=1744221173-e_-1h4bfE9ZGJPZLBhVSK0m-dvqvwyxFxd77Nc0vnRc" alt="" />
                    </div>
                    <p> A Gem Lost Too Early: Who Introduced Her To Drugs?</p>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/22226896/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyNS0wMi8xMDE5MjQvODJjM2EwZmRhYTA3MjE0MjI3ZGFjYmFiMTM4NDU2YTQuanBn.webp?v=1744221173-QC-wqjL0a_fOF2YlVJs4XzmHHI5CFjQyGl-xLq0STyg" alt="" />
                    </div>
                    <p>टाइटनोबोआ या अनाकोंडा? कौन सा सांप है असल में सबसे विशाल?</p>
                </div>
            </div>
            <div className="row px-5">
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/21522832/492x277/-/aHR0cDovL2NsLmltZ2hvc3RzLmNvbS9pbWdoL2ltYWdlL2ZldGNoL2FyXzE2OjksY19maWxsLGVfc2hhcnBlbjoxMDAsZl9qcGcsZ19mYWNlczphdXRvLHFfYXV0bzpnb29kLHdfMTAyMC9odHRwOi8vaW1naG9zdHMuY29tL3QvMjAyNC0xMS8xMDE5MjQvZmRkYTZmZDc0NTg2OTMwOTA5NzJmMWYyOTg4YmZmMTcuanBn.webp?v=1744221173-UxoeV8i34fRFQ67qV7moqVQoO0MIaHJ7DTuFo00O_aM" alt="" width="480px" />
                    </div>
                    <p>आपकी मुट्ठी बनाने का तरीका बताएगा आपके छुपे हुए राज़!</p>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://s-img.mgid.com/g/2875769/492x277/72x24x491x276/aHR0cDovL2ltZ2hvc3RzLmNvbS90ZW1wLzIwMTgtMDctMzEvMTAxOTI0LzljYzFkN2MxMThjOGE2YmVhZDI5YjRmM2ExMmY0OTMxLmpwZWc.webp?v=1744221173-uswB6yDGzG9bcePvSvJ_8oyF7EgUyVXGCUsbV6eW4oc" alt="" width="480px" />
                    </div>
                    <p>12 Sure Signs He's Super Serious About You</p>
                </div>
            </div>

        </>
    )
}
export default Newsong;