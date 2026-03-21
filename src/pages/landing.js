import React from "react";
import MouseModifier from "../components/MouseModifier";
import BackgroundVideo from "../components/BackgroundVideo";
import MusicPlayer from "../components/MusicPlayer";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div className="fixed inset-0 flex flex-col" style={{background: '#000000'}}>
            <NavBar />
            <main className="flex-1 mx-2 mb-2 rounded-xl overflow-hidden relative">
                {/* Fixed background layer */}
                <div className="absolute inset-0"
                     style={{background: 'radial-gradient(circle, rgba(2,0,38,1) 0%, rgba(0,34,82,1) 35%, rgba(1,86,121,1) 100%)'}}>
                    <BackgroundVideo />
                </div>
                {/* Scrollable content */}
                <div className="relative z-10 h-full overflow-y-auto" style={{scrollBehavior: 'smooth'}}>
                    <MouseModifier />
                </div>
                {/* Fixed music player bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-md border-t border-white/10 px-6 py-3">
                    <div className="max-w-2xl mx-auto">
                        <MusicPlayer textEnter={() => {}} textLeave={() => {}} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
