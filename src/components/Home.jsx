import CustomSlider from "../pages/CustomSlider";
import ResponsiveSlider from "../pages/ResponsiveSlider";
import CircleSlider from "../pages/CircleSlider";
import Album from "../data/Album.json"
import Chart from "../data/Chart.json"
import Most from "../data/Most.json"
import Top from "../data/Top.json"
import Featured from "../data/Featured.json"
// import NewSong from "../data/NewSong.json"
import New from "../data/New.json"
// import Old from "../data/Old.json"
import Romance from "../data/Romance.json"
import Retro from "../data/Retro.json"
import Bhakti from "../data/Bhakti.json"
import Start from "../data/Start.json"
import Playlist from "../data/Playlist.json"
import City from "../data/City.json"
import Radio from "../data/Radio.json"
import Gaana from "../data/Ganna.json"
import Searched from "../data/Searched.json"
import Just from "../data/Just.json"
import Recommands from "../data/Recommands.json"
import Indie from "../data/Indie.json"
import Mehfil from "../data/Mehfil.json"


const Home = () => {

    

    return (
        <div className="container px-4 ">
            <div className="Customslider ">
                <CustomSlider />
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <h3 className="fw-bold">Recently Played</h3>
                <p className="see mb-0">See All</p>
            </div>
            <div className="row align-items-center ">
                <div className="col-3 d-flex  align-items-center">
                    <img src="https://a10.gaanacdn.com/gn_img/albums/4Z9bqZoKyQ/9bqZzpyPKy/size_m_1727968697.jpg" width="50px" alt="" />
                    <div className="px-2">
                        <h6>GOOD FEELINGS</h6>
                        <span>moon music</span>
                    </div>
                </div>
                <div className="col-3">
                    <svg class="threedot_svg" width="24" height="24" viewBox="0 0 24 24"><g class="svg_color" fill="#000" transform="translate(10 5)"><circle cx="1.5" cy="1.5" r="1.5"></circle><circle cx="1.5" cy="7.5" r="1.5"></circle><circle cx="1.5" cy="13.5" r="1.5"></circle></g></svg>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <img src="https://a10.gaanacdn.com/images/section/Web-Home-Rs1-new_1719768045.jpg" width="100%" alt="" />
                </div>
            </div>
            <div className="row mt-2 ">
                <div className="d-flex justify-content-between align-items-cente py-2">
                    <h3 className="fw-bold">Top charts</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Album &&
                    <ResponsiveSlider items={Album} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Shades Of Love</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Chart &&
                    <ResponsiveSlider items={Chart} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Most Streamed Songs 2024</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Most &&
                    <ResponsiveSlider items={Most} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Top Charts</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Top &&
                    <ResponsiveSlider items={Top} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Featured Artists</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Featured &&
                    <CircleSlider items={Featured} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Trending Songs</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {New &&
                    < ResponsiveSlider items={New} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">New Releases</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {New &&
                    <ResponsiveSlider items={New} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">90s & 2000s</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Gaana &&
                    <ResponsiveSlider items={Gaana} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center  py-2">
                    <h3 className="fw-bold">Romance</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Romance &&
                    <ResponsiveSlider items={Romance} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Retro Playlist</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Retro &&
                    <ResponsiveSlider items={Retro} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Bhakti</h3>
                    <p className="see mb-0">See All</p>
                </div>

                {Bhakti &&
                    <ResponsiveSlider items={Bhakti} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Star Gallery</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Start &&
                    <ResponsiveSlider items={Start} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Top Playlist</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Playlist &&
                    <ResponsiveSlider items={Playlist} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">City Top Charts</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {City &&
                    <ResponsiveSlider items={City} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Radio</h3>
                    <p className="see mb-0">See All</p>
                </div>

                {Radio &&
                    <CircleSlider items={Radio} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Gaana Party Zone</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Gaana &&
                    <ResponsiveSlider items={Gaana} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Top Searched Artists</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Searched &&
                    <ResponsiveSlider items={Searched} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Just Arrived</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Just &&
                    <ResponsiveSlider items={Just} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Gaana Recommands</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Recommands &&
                    <ResponsiveSlider items={Recommands} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold">Indie Playlists</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Indie &&
                    < ResponsiveSlider items={Indie} />
                }
            </div>
            <div className="row mt-2">
                <div className="d-flex justify-content-between align-items-center py-2">
                    <h3 className="fw-bold"> Mehfil-E-Ghazal</h3>
                    <p className="see mb-0">See All</p>
                </div>
                {Mehfil &&
                    <ResponsiveSlider items={Mehfil} />
                }
            </div>
        </div>
    )
}
export default Home;