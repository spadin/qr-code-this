require 'rubygems' 
require 'sinatra' 

class QRCodeThisApp < Sinatra::Base
  set :public, File.dirname(__FILE__) + '/public'

  get '/' do 
    redirect '/index.html' 
  end
  
  run! if app_file == $0
end