class UserMailer < ApplicationMailer

  def welcome_email(user)
    @user = user 

    @url  = 'https://noesia.vercel.app' 

    mail(from: 'noesia_dev@protonmail.com', to: @user.email, subject: 'Bienvenue à  Noesia !')
  end

end