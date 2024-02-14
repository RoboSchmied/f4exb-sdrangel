///////////////////////////////////////////////////////////////////////////////////
// Copyright (C) 2012 maintech GmbH, Otto-Hahn-Str. 15, 97204 Hoechberg, Germany //
// written by Christian Daniel                                                   //
// Copyright (C) 2015-2020 Edouard Griffiths, F4EXB <f4exb06@gmail.com>          //
// Copyright (C) 2021 Jon Beniston, M7RCE <jon@beniston.com>                     //
//                                                                               //
// This program is free software; you can redistribute it and/or modify          //
// it under the terms of the GNU General Public License as published by          //
// the Free Software Foundation as version 3 of the License, or                  //
// (at your option) any later version.                                           //
//                                                                               //
// This program is distributed in the hope that it will be useful,               //
// but WITHOUT ANY WARRANTY; without even the implied warranty of                //
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the                  //
// GNU General Public License V3 for more details.                               //
//                                                                               //
// You should have received a copy of the GNU General Public License             //
// along with this program. If not, see <http://www.gnu.org/licenses/>.          //
///////////////////////////////////////////////////////////////////////////////////

#include "SWGFeatureSettings.h"
#include "skymap.h"
#include "skymapwebapiadapter.h"

SkyMapWebAPIAdapter::SkyMapWebAPIAdapter()
{}

SkyMapWebAPIAdapter::~SkyMapWebAPIAdapter()
{}

int SkyMapWebAPIAdapter::webapiSettingsGet(
        SWGSDRangel::SWGFeatureSettings& response,
        QString& errorMessage)
{
    (void) errorMessage;
    response.setSkyMapSettings(new SWGSDRangel::SWGSkyMapSettings());
    response.getSkyMapSettings()->init();
    SkyMap::webapiFormatFeatureSettings(response, m_settings);

    return 200;
}

int SkyMapWebAPIAdapter::webapiSettingsPutPatch(
        bool force,
        const QStringList& featureSettingsKeys,
        SWGSDRangel::SWGFeatureSettings& response,
        QString& errorMessage)
{
    (void) force; // no action
    (void) errorMessage;
    SkyMap::webapiUpdateFeatureSettings(m_settings, featureSettingsKeys, response);

    return 200;
}
