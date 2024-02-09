package com.ngm301.vovi.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanUtilsConfig {
	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}

}
