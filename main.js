/*#########################################################################
#                                                                         #
#   Simple script for Chinese Radio Services                              #
#                                                                         #
#   Copyright                                                             #
#   (C)       2008 Peter ZHOU <peterzhoulei@gmail.com>                    #
#                                                                         #
#   This program is free software; you can redistribute it and/or modify  #
#   it under the terms of the GNU General Public License as published by  #
#   the Free Software Foundation; either version 2 of the License, or     #
#   (at your option) any later version.                                   #
#                                                                         #
#   This program is distributed in the hope that it will be useful,       #
#   but WITHOUT ANY WARRANTY; without even the implied warranty of        #
#   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         #
#   GNU General Public License for more details.                          #
#                                                                         #
#   You should have received a copy of the GNU General Public License     #
#   along with this program; if not, write to the                         #
#   Free Software Foundation, Inc.,                                       #
#   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.         #
##########################################################################*/

function Station( name, url )
{
    this.name = name;
    this.url = url;
}

var stationArray = new Array (
    new Station( "动感101",                     "mms://218.78.215.88/101" )
);

function ChineseRadio()
{
    ScriptableServiceScript.call( this, "Chinese Radio", 1, "Chinese Radio Stations", "Some really cool Chinese radio streams", false );
}

function onConfigure()
{
    Amarok.alert( "This script does not require any configuration." );
}

function onPopulating( level, callbackData, filter )
{
    print( " Populating station level..." );
    //add the station streams as leaf nodes
    for ( i = 0; i < stationArray.length; i++ )
    {
        item = Amarok.StreamItem;
        item.level = 0;
        item.callbackData = "";
        item.itemName = stationArray[i].name;
        item.playableUrl = stationArray[i].url;
        item.infoHtml = "A cool stream called " + item.itemName;
        script.insertItem( item );
    }
    script.donePopulating();
}

Amarok.configured.connect( onConfigure );

script = new ChineseRadio();
script.populate.connect( onPopulating );