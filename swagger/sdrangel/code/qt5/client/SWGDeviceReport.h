/**
 * SDRangel
 * This is the web REST/JSON API of SDRangel SDR software. SDRangel is an Open Source Qt5/OpenGL 3.0+ (4.3+ in Windows) GUI and server Software Defined Radio and signal analyzer in software. It supports Airspy, BladeRF, HackRF, LimeSDR, PlutoSDR, RTL-SDR, SDRplay RSP1, USRP and FunCube    ---   Limitations and specifcities:    * In SDRangel GUI the first Rx device set cannot be deleted. Conversely the server starts with no device sets and its number of device sets can be reduced to zero by as many calls as necessary to /sdrangel/deviceset with DELETE method.   * Preset import and export from/to file is a server only feature.   * Device set focus is a GUI only feature.   * The following channels are not implemented (status 501 is returned): ATV and DATV demodulators, Channel Analyzer NG, LoRa demodulator   * The device settings and report structures contains only the sub-structure corresponding to the device type. The DeviceSettings and DeviceReport structures documented here shows all of them but only one will be or should be present at a time   * The channel settings and report structures contains only the sub-structure corresponding to the channel type. The ChannelSettings and ChannelReport structures documented here shows all of them but only one will be or should be present at a time    --- 
 *
 * OpenAPI spec version: 4.15.0
 * Contact: f4exb06@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/*
 * SWGDeviceReport.h
 *
 * Base device report. Only the device report corresponding to the device specified in the deviceHwType is or should be present.
 */

#ifndef SWGDeviceReport_H_
#define SWGDeviceReport_H_

#include <QJsonObject>


#include "SWGAirspyHFReport.h"
#include "SWGAirspyReport.h"
#include "SWGBladeRF2InputReport.h"
#include "SWGBladeRF2OutputReport.h"
#include "SWGFileInputReport.h"
#include "SWGKiwiSDRReport.h"
#include "SWGLimeSdrInputReport.h"
#include "SWGLimeSdrOutputReport.h"
#include "SWGLocalInputReport.h"
#include "SWGLocalOutputReport.h"
#include "SWGPerseusReport.h"
#include "SWGPlutoSdrInputReport.h"
#include "SWGPlutoSdrOutputReport.h"
#include "SWGRemoteInputReport.h"
#include "SWGRemoteOutputReport.h"
#include "SWGRtlSdrReport.h"
#include "SWGSDRPlayReport.h"
#include "SWGSigMFFileInputReport.h"
#include "SWGSoapySDRReport.h"
#include "SWGUSRPInputReport.h"
#include "SWGUSRPOutputReport.h"
#include "SWGXtrxInputReport.h"
#include "SWGXtrxOutputReport.h"
#include <QString>

#include "SWGObject.h"
#include "export.h"

namespace SWGSDRangel {

class SWG_API SWGDeviceReport: public SWGObject {
public:
    SWGDeviceReport();
    SWGDeviceReport(QString* json);
    virtual ~SWGDeviceReport();
    void init();
    void cleanup();

    virtual QString asJson () override;
    virtual QJsonObject* asJsonObject() override;
    virtual void fromJsonObject(QJsonObject &json) override;
    virtual SWGDeviceReport* fromJson(QString &jsonString) override;

    QString* getDeviceHwType();
    void setDeviceHwType(QString* device_hw_type);

    qint32 getDirection();
    void setDirection(qint32 direction);

    SWGAirspyReport* getAirspyReport();
    void setAirspyReport(SWGAirspyReport* airspy_report);

    SWGAirspyHFReport* getAirspyHfReport();
    void setAirspyHfReport(SWGAirspyHFReport* airspy_hf_report);

    SWGBladeRF2InputReport* getBladeRf2InputReport();
    void setBladeRf2InputReport(SWGBladeRF2InputReport* blade_rf2_input_report);

    SWGBladeRF2OutputReport* getBladeRf2OutputReport();
    void setBladeRf2OutputReport(SWGBladeRF2OutputReport* blade_rf2_output_report);

    SWGFileInputReport* getFileInputReport();
    void setFileInputReport(SWGFileInputReport* file_input_report);

    SWGLimeSdrInputReport* getLimeSdrInputReport();
    void setLimeSdrInputReport(SWGLimeSdrInputReport* lime_sdr_input_report);

    SWGKiwiSDRReport* getKiwiSdrReport();
    void setKiwiSdrReport(SWGKiwiSDRReport* kiwi_sdr_report);

    SWGLimeSdrOutputReport* getLimeSdrOutputReport();
    void setLimeSdrOutputReport(SWGLimeSdrOutputReport* lime_sdr_output_report);

    SWGLocalInputReport* getLocalInputReport();
    void setLocalInputReport(SWGLocalInputReport* local_input_report);

    SWGLocalOutputReport* getLocalOutputReport();
    void setLocalOutputReport(SWGLocalOutputReport* local_output_report);

    SWGPerseusReport* getPerseusReport();
    void setPerseusReport(SWGPerseusReport* perseus_report);

    SWGPlutoSdrInputReport* getPlutoSdrInputReport();
    void setPlutoSdrInputReport(SWGPlutoSdrInputReport* pluto_sdr_input_report);

    SWGPlutoSdrOutputReport* getPlutoSdrOutputReport();
    void setPlutoSdrOutputReport(SWGPlutoSdrOutputReport* pluto_sdr_output_report);

    SWGRtlSdrReport* getRtlSdrReport();
    void setRtlSdrReport(SWGRtlSdrReport* rtl_sdr_report);

    SWGRemoteOutputReport* getRemoteOutputReport();
    void setRemoteOutputReport(SWGRemoteOutputReport* remote_output_report);

    SWGRemoteInputReport* getRemoteInputReport();
    void setRemoteInputReport(SWGRemoteInputReport* remote_input_report);

    SWGSDRPlayReport* getSdrPlayReport();
    void setSdrPlayReport(SWGSDRPlayReport* sdr_play_report);

    SWGSigMFFileInputReport* getSigMfFileInputReport();
    void setSigMfFileInputReport(SWGSigMFFileInputReport* sig_mf_file_input_report);

    SWGSoapySDRReport* getSoapySdrInputReport();
    void setSoapySdrInputReport(SWGSoapySDRReport* soapy_sdr_input_report);

    SWGSoapySDRReport* getSoapySdrOutputReport();
    void setSoapySdrOutputReport(SWGSoapySDRReport* soapy_sdr_output_report);

    SWGUSRPInputReport* getUsrpInputReport();
    void setUsrpInputReport(SWGUSRPInputReport* usrp_input_report);

    SWGUSRPOutputReport* getUsrpOutputReport();
    void setUsrpOutputReport(SWGUSRPOutputReport* usrp_output_report);

    SWGXtrxInputReport* getXtrxInputReport();
    void setXtrxInputReport(SWGXtrxInputReport* xtrx_input_report);

    SWGXtrxOutputReport* getXtrxOutputReport();
    void setXtrxOutputReport(SWGXtrxOutputReport* xtrx_output_report);


    virtual bool isSet() override;

private:
    QString* device_hw_type;
    bool m_device_hw_type_isSet;

    qint32 direction;
    bool m_direction_isSet;

    SWGAirspyReport* airspy_report;
    bool m_airspy_report_isSet;

    SWGAirspyHFReport* airspy_hf_report;
    bool m_airspy_hf_report_isSet;

    SWGBladeRF2InputReport* blade_rf2_input_report;
    bool m_blade_rf2_input_report_isSet;

    SWGBladeRF2OutputReport* blade_rf2_output_report;
    bool m_blade_rf2_output_report_isSet;

    SWGFileInputReport* file_input_report;
    bool m_file_input_report_isSet;

    SWGLimeSdrInputReport* lime_sdr_input_report;
    bool m_lime_sdr_input_report_isSet;

    SWGKiwiSDRReport* kiwi_sdr_report;
    bool m_kiwi_sdr_report_isSet;

    SWGLimeSdrOutputReport* lime_sdr_output_report;
    bool m_lime_sdr_output_report_isSet;

    SWGLocalInputReport* local_input_report;
    bool m_local_input_report_isSet;

    SWGLocalOutputReport* local_output_report;
    bool m_local_output_report_isSet;

    SWGPerseusReport* perseus_report;
    bool m_perseus_report_isSet;

    SWGPlutoSdrInputReport* pluto_sdr_input_report;
    bool m_pluto_sdr_input_report_isSet;

    SWGPlutoSdrOutputReport* pluto_sdr_output_report;
    bool m_pluto_sdr_output_report_isSet;

    SWGRtlSdrReport* rtl_sdr_report;
    bool m_rtl_sdr_report_isSet;

    SWGRemoteOutputReport* remote_output_report;
    bool m_remote_output_report_isSet;

    SWGRemoteInputReport* remote_input_report;
    bool m_remote_input_report_isSet;

    SWGSDRPlayReport* sdr_play_report;
    bool m_sdr_play_report_isSet;

    SWGSigMFFileInputReport* sig_mf_file_input_report;
    bool m_sig_mf_file_input_report_isSet;

    SWGSoapySDRReport* soapy_sdr_input_report;
    bool m_soapy_sdr_input_report_isSet;

    SWGSoapySDRReport* soapy_sdr_output_report;
    bool m_soapy_sdr_output_report_isSet;

    SWGUSRPInputReport* usrp_input_report;
    bool m_usrp_input_report_isSet;

    SWGUSRPOutputReport* usrp_output_report;
    bool m_usrp_output_report_isSet;

    SWGXtrxInputReport* xtrx_input_report;
    bool m_xtrx_input_report_isSet;

    SWGXtrxOutputReport* xtrx_output_report;
    bool m_xtrx_output_report_isSet;

};

}

#endif /* SWGDeviceReport_H_ */
