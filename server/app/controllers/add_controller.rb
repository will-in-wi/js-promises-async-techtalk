class AddController < ApplicationController
  def index
    sum = params[:a].to_i + params[:b].to_i

    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, PUT, DELETE, GET, OPTIONS'
    headers['Access-Control-Request-Method'] = '*'
    headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization'

binding.pry

    render json: {sum: sum}
  end
end
