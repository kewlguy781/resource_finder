class Api::EntriesController < ApplicationController
  before_action :authenticate_user!, only: [:create, :update]
  before_action :set_entry, only: [:show, :update, :destroy]
  before_action :set_category

  def index
    render json: @category.entries
  end

  def entry_all
    render json: Entry.all
  end

  def show
    render json: @entry
  end
    
  def user_entries
    render json: @current_user.entries
  end

  def new 
    @comment = Entry.new
  end

  def create
    entry = Entry.new(entry_params)
    if entry.save
      render json: entry
    else
      render json: entry.errors, status: 422
    end
  end

  def update
    if entry.update(entry_params)
      render json: @entry
    else
      render json: @entry.errors, status: 422
    end
  end

  def destroy
    @entry.destroy
  end

  private

  def set_category
    @category = Category.find(params[:category_id])
  end

  def set_entry
    @entry = Entry.find(params[:entry_id])
  end

  def entry_params
    params
    .require(:entry)
    .permit(
        :name, 
        :address, 
        :img, 
        :city, 
        :state, 
        :email, 
        :facebook, 
        :wed, 
        :phone, 
        :desc, 
      )
  end


end
