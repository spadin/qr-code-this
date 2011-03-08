require 'rubygems' 
require 'sinatra' 

class QRCodeThisApp < Sinatra::Base
  set :public, File.dirname(__FILE__) + '/public'
  
  # Basic Authentication
  # Asks for password only if on Heroku
  if ENV['RACK_ENV'] == 'production' then
    use Rack::Auth::Basic, "Restricted Area" do |username, password|
      [username, password] == ['comdex', 'comdexpass1']
    end
  end

  get '/' do 
    redirect '/index.html' 
  end
  
  run! if app_file == $0
end