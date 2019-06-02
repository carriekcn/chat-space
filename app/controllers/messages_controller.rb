class MessagesController < ApplicationController
  def index
  end

  def create
    #Message.create(create_params)
    #redirect_to controller: :groups. actopm: :index
  end

  private
  def create_params
    #params.require(:message).permit(:content, :image).merge()...
  end

end
