`from PIL import Image,ImageDraw,ImageFont
width,height=${width},${height}
im=Image.new("RGBA",(width,height),${bgcol})
dr=ImageDraw.Draw(im)
dr.polygon([(0,0),(50,0),(75,75),(0,50)],fill=(100,100,100)) #example action
im.save("Export.png")
`;


`from PIL import Image,ImageDraw,ImageFont
from math import cos,sin,pi,sqrt
width,height=${width},${height}
im=Image.new("RGBA",(width,height),${bgcol})
func=lambda x,y: ((x+y)%256,(y-x)%256,abs(50-sqrt(x**2+y**2))%256)#some function here that converts position into color
for x in range(width):#iterate through the image
  for y in range(height):#in two dimensions
    im.putpixel((x,y),func(x,y))#draw the color to the image
im.save("Export.png")
`;
