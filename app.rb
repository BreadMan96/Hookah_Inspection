require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'sinatra/activerecord'

set :database, "sqlite3:hookah_inspection.db"

class Hookah < ActiveRecord::Base
end

get '/' do 
	@hookahs = Hookah.all

	erb :index
end 

get '/contacts' do
	erb 'Тут контакты'
end

get '/delivery' do
	erb 'Здесь будет инфа по доставке'
end

get '/question-answer' do
	erb :question_answer
end