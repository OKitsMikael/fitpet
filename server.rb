require_relative './settings.rb'
require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
 erb :splash, layout: :layout
end