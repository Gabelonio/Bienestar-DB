package com.empleado.modulo.service.email;

import lombok.AllArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;


@Service
@AllArgsConstructor
public class EmailImpl implements IEmail{

    private final static Logger LOGGER = LoggerFactory.getLogger(EmailImpl.class);

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    @Async
    public void send(String to) {
        SimpleMailMessage mailMessage = new SimpleMailMessage();

        mailMessage.setFrom("bienestarudconfirmacion@gmail.com");
        mailMessage.setTo(to);
        mailMessage.setSubject("Confirmación de usuario ");
        mailMessage.setText("Su usuario fue creada con exito");

        javaMailSender.send(mailMessage);
    }




}
