require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'sinatra/activerecord'

set :database, "sqlite3:hookah_inspection.db"

class Hookah < ActiveRecord::Base
end

class Order < ActiveRecord::Base
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

post '/cart' do
  @orders_input = params[:orderstring]
  @items = parse_orders_input @orders_input

  # выводим сообщение о том, что корзина пуста
  if @items.length == 0
    return erb :cart_is_empty
  end

  @items.each do |item|
    # id, cnt
    item[0] = Hookah.find(item[0])
  end

	erb :cart
end



get '/test' do
	erb :test
end




def parse_orders_input orders_input
  s1 = orders_input.split(/,/)

  arr = []

  s1.each do |x|
    s2 = x.split(/\=/)

    s3 = s2[0].split(/_/)

    id = s3[1]
    cnt = s2[1]

    arr2 = [id, cnt]

    arr.push arr2
  end

  return arr
end