package com.bombom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bombom.model.PremiereDAO;
import com.bombom.model.PremiereDTO;
import com.bombom.model.TalkDAO;
import com.bombom.model.TalkDTO;

@Controller
public class HomeController {

	@Autowired
	private TalkDAO talkDao;
	
	@Autowired
	private PremiereDAO premiereDao;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		
		List<TalkDTO> posts = talkDao.getMainPosts();
		
		// 시사회 게시판
		List<PremiereDTO> premiere = this.premiereDao.getMainList();
		
		model.addAttribute("posts", posts);	
		model.addAttribute("premiere", premiere);
		
		return "home";
	}
	
	
	
	@RequestMapping("banner")
	public String banner() {
		
		return "include/banner";
	}
}
