import React,{Component} from 'react';
import {Link} from 'react-router';
import './audio.scss';
import classnames from 'utils/classnames.js';
import img from "Assets/images/miao.jpg";
// import Music from 'Assets/Adele - One And Only.mp3';
export default class Audio extends Component{
    constructor(props) {
    super(props);
        this.state = {
            currentTime:0,
            duration:1
        };
        this.audioInfo = this.audioInfo.bind(this);
        this.formateTime = this.formateTime.bind(this);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
    }
	componentDidMount(){
        let audio = this.refs.audio;
        if(audio){
            audio.canPlay = this.initTime(audio)
        }
	}
	parseAudio(audio){
        let info = {
            currentTime:audio.currentTime,
            duration:audio.duration,
            end:audio.ended,
        }
	}
    changeCurrentTime(e){
        if(e){
            console.log(e.pageX)
        }
    }
    initTime(audio){
        console.log(audio.buffered)
        this.setState({
            duration:Number.isNaN(audio.duration)?1:audio.duration,
            currentTime:audio.currentTime,
        })
    }

    play(){
        let audio = this.refs.audio;
        console.log(audio.played)
        if(audio){
            audio.play()
        }
        this.setState({
            play:true
        })
        setInterval(this.changeTime(audio),500)
    }
    pause(){
        clearInterval(this.timer)
        let audio = this.refs.audio;
        if(audio){
            audio.pause()
        }
        this.setState({play:false })
    }

    changeTime(audio){
        this.timer = setInterval(()=>{
            if(audio){
            this.setState({
                currentTime:audio.currentTime,
                duration:audio.duration,
            })
        }
        },300)
        
    }

    audioInfo(){
        // console.log(this)
        // let audio = this.refs.audio
        // console.log(this.refs)
        // console.log(this.refs.audio)
        // if(audio){
        //     console.log(audio)
        // }
        // return audio
    }
    formateTime(time){
        let hour= Math.floor(time/3600)||'zero'
        let minunit = Math.floor(time/60)
        let seconds = Math.floor(time%60)
        // return hour?hour+":":""+minunit>10?minunit
        console.log([hour,minunit,seconds].join(':'))
        return [hour,minunit,seconds].join(':').replace(/^(\d)$/, "0$1").replace('zero:','');
    }
    

	render(){
        let url = "https://d11.baidupcs.com/file/8fef355bbd6282223bf34e0652af0fc4?bkt=p3-14008fef355bbd6282223bf34e0652af0fc48b3cb6b600000055225f&xcode=71dd1ebabfccd08c86587bd4468cf74d37e4ecca38206d27&fid=3895486529-250528-509944553528403&time=1501393883&sign=FDTAXGERLBHS-DCb740ccc5511e5e8fedcff06b081203-K1QKklBaGv9gPov0TwncrlSw0uU%3D&to=d11&size=5579359&sta_dx=5579359&sta_cs=1153&sta_ft=mp3&sta_ct=0&sta_mt=0&fm2=MH,Yangquan,Netizen-anywhere,,zhejiang,cmnet&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=14008fef355bbd6282223bf34e0652af0fc48b3cb6b600000055225f&sl=76480590&expires=8h&rt=pr&r=642260174&mlogid=4883883337814583607&vuk=3895486529&vbdid=2501330093&fin=Adele+-+One+And+Only.mp3&fn=Adele+-+One+And+Only.mp3&rtype=1&iv=0&dp-logid=4883883337814583607&dp-callid=0.1.1&hps=1&csl=80&csign=ZOVLKPjYXKGDSzFlQr0wMifC2hs%3D&so=0&ut=6&uter=4&serv=0&by=themis"
        let url1 = "https://shcm09.baidupcs.com/file/8e5114c8b4b6767e4d5ddcf623fa27f0?bkt=p3-14008e5114c8b4b6767e4d5ddcf623fa27f0ce240e7d0000001e46d6&fid=3895486529-250528-853969375733828&time=1501394170&sign=FDTAXGERLBHS-DCb740ccc5511e5e8fedcff06b081203-tB%2Fq1kEvmV1AvDdrn1y0vbw7hg0%3D&to=71&size=1984214&sta_dx=1984214&sta_cs=1&sta_ft=mp3&sta_ct=0&sta_mt=0&fm2=MH,Nanjing02,Netizen-anywhere,,zhejiang,cmnet&newver=1&newfm=1&secfm=1&flow_ver=3&pkey=14008e5114c8b4b6767e4d5ddcf623fa27f0ce240e7d0000001e46d6&sl=76480590&expires=8h&rt=pr&r=739869868&mlogid=4883960478415438940&vuk=3895486529&vbdid=2501330093&fin=Ashley+Tisdale%E3%80%81lucas+Grabeel+-+What+I%27ve+Been+Looking+For.mp3&fn=Ashley+Tisdale%E3%80%81lucas+Grabeel+-+What+I%27ve+Been+Looking+For.mp3&rtype=1&iv=0&dp-logid=4883960478415438940&dp-callid=0.1.1&hps=1&csl=80&csign=ZOVLKPjYXKGDSzFlQr0wMifC2hs%3D&so=0&ut=6&uter=4&serv=0&by=themis"
        let allTime = "5:42"
        let info = this.audioInfo()
        let {currentTime,duration} = this.state;
        let currentPosition = (currentTime/duration*100)+'%'
        return (
            <div className="audio">
                <img src={img} />
                <div className="controls">
                    <div className="bar-bg">
                        <div className="audio-cookie"></div>
                        <div className="bar-cur" style={{width:currentPosition}}></div>
                        <span className="time-dir" style={{left:currentPosition}} onMouseDown={this.changeCurrentTime}></span>
                    </div>
                    <div className="play">
                      <div className="play-time">{this.formateTime(currentTime)}/{this.formateTime(duration)}</div>
                      {
                          this.state.play?
                          <div className="pause-btn" onClick={this.pause.bind(this)}></div>:
                          <div className="play-btn" onClick={this.play.bind(this)}></div>
                      }  
                    </div>
                </div>

                <audio controls preload="metadata" ref="audio">
                    <source src={url1}/>   
                </audio>
                
            </div>
		)
	}
}