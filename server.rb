require_relative './settings'
require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
 erb :splash
end