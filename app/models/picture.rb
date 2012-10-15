class Picture < Asset

	validates_attachment_size :attachment, :less_than => 2.megabytes
	
	def url_content
	  url(:content)
	end
	
	def url_thumb
	  url(:thumb)
	end
	
	def to_json(options = {})
	  options[:methods] ||= []
	  options[:methods] << :url_content
	  options[:methods] << :url_thumb
	  super options
  end
end
