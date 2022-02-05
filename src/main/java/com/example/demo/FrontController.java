package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontController {
	
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
	@RequestMapping(value = "/chart")
	public String chart() {
		return "contents/musicChart";
	}
	
	@RequestMapping(value = "/music/music")
	public String music() {
		return "contents/rMusic";
	}
	
	@RequestMapping(value = "/music/album")
	public String album() {
		return "contents/rAlbum";
	}
}
