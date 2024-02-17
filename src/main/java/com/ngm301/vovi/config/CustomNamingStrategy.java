package com.ngm301.vovi.config;

import org.hibernate.boot.model.naming.Identifier;
import org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl;
import org.hibernate.engine.jdbc.env.spi.JdbcEnvironment;

public class CustomNamingStrategy extends PhysicalNamingStrategyStandardImpl{

	@Override
	public Identifier toPhysicalColumnName(Identifier name, JdbcEnvironment context) {
		String transformedName = name.getText().replaceAll("([a-z])([A-Z])", "$1_$2").toUpperCase();	// 대문자로 변환하고 언더스코어 추가
		return new Identifier(transformedName, name.isQuoted());
	}

}
