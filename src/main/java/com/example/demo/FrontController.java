package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontController {
	//메인 페이지
	@RequestMapping(value = "/")
	public String Main() {
		return "index";
	}
	//로그인
	@RequestMapping(value = "/login")
	public String login() {
		return "contents/login";
	}
	//회원가입
	@RequestMapping(value = "/register")
	public String register() {
		return "contents/register";
	}
	//차트
	@RequestMapping(value = "/chart")
	public String chart() {
		return "contents/chart/musicChart";
	}
	//최신음악 > 최신곡
	@RequestMapping(value = "/music/music")
	public String music() {
		return "contents/recent/rMusic";
	}
	//최신음악 > 최신 앨범
	@RequestMapping(value = "/music/album")
	public String album() {
		return "contents/recent/rAlbum";
	}
	//최신음악 > 최신 뮤직비디오
	@RequestMapping(value = "/music/video")
	public String video() {
		return "contents/recent/rVideo";
	}
	//장르 > 발라드
	@RequestMapping(value = "/genre/ballad")
	public String ballad() {
		return "contents/genre/ballad";
	}
	//장르 > R&B/soul
	@RequestMapping(value = "/genre/rbsoul")
	public String rbsoul() {
		return "contents/genre/rbsoul";
	}
	
	//장르 > 댄스
	@RequestMapping(value = "/genre/dance")
	public String dance() {
		return "contents/genre/dance";
	}
	
	//장르 > 랩/힙합
	@RequestMapping(value = "/genre/rap")
	public String rap() {
		return "contents/genre/rap";
	}
	
	//장르 > 인디음악
	@RequestMapping(value = "/genre/indie")
	public String indie() {
		return "contents/genre/indie";
	}
	
	//장르 > pop
	@RequestMapping(value = "/genre/pop")
	public String pop() {
		return "contents/genre/pop";
	}
	//플레이리스트 > 인기 플레이리스트
	@RequestMapping(value = "/playlist/pplaylist")
	public String pplaylist() {
		return "contents/playlist/pplaylist";
	}
	//플레이리스트 > 최신 플레이리스트
	@RequestMapping(value = "/playlist/rplaylist")
	public String rplaylist() {
		return "contents/playlist/rplaylist";
	}
}
