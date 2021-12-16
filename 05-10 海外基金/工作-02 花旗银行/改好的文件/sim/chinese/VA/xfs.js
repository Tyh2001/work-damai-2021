     htmlen = document.getElementsByTagName("html").length;
     for(i=0;i<htmlen;i++)
     {
document.getElementsByTagName("html")[i].style.visibility="hidden";
document.getElementsByTagName("html")[i].style.display="none";
     }


     if(self==top)
         {
                document.documentElement.style.display = 'block' ;
             document.documentElement.style.visibility = 'visible' ;
         }
        else
            {
            top.location = self.location ;
}