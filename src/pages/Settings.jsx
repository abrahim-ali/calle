import React, { useState } from 'react'
import { Settings as SettingsIcon, Save, Bell, Shield, Database, Headphones, Users, Phone } from 'lucide-react'
import './Settings.css'

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general')
  const [settings, setSettings] = useState({
    general: {
      companyName: 'شركة الاتصالات المتقدمة',
      timezone: 'Asia/Riyadh',
      language: 'ar',
      dateFormat: 'DD/MM/YYYY'
    },
    calls: {
      maxCallDuration: 30,
      autoRecording: true,
      callQueueLimit: 50,
      ringTimeout: 30,
      transferTimeout: 15
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      soundAlerts: true,
      missedCallAlerts: true
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 60,
      passwordExpiry: 90,
      loginAttempts: 5,
      ipWhitelist: ''
    },
    agents: {
      maxConcurrentCalls: 3,
      breakDuration: 15,
      shiftDuration: 8,
      performanceTracking: true,
      autoStatusUpdate: true
    }
  })

  const handleSettingChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }))
  }

  const handleSave = () => {
    // Save settings logic here
    alert('تم حفظ الإعدادات بنجاح!')
  }

  const tabs = [
    { id: 'general', label: 'عام', icon: SettingsIcon },
    { id: 'calls', label: 'المكالمات', icon: Phone },
    { id: 'agents', label: 'الموظفين', icon: Users },
    { id: 'notifications', label: 'الإشعارات', icon: Bell },
    { id: 'security', label: 'الأمان', icon: Shield }
  ]

  return (
    <div className="settings-page fade-in">
      <div className="page-header">
        <div className="header-content">
          <h1>إعدادات النظام</h1>
          <p>تخصيص وإدارة إعدادات كول سنتر</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary" onClick={handleSave}>
            <Save />
            حفظ التغييرات
          </button>
        </div>
      </div>

      <div className="settings-container">
        <div className="settings-sidebar">
          <nav className="settings-nav">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="nav-icon" />
                  <span className="nav-label">{tab.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        <div className="settings-content">
          {activeTab === 'general' && (
            <div className="settings-section slide-in">
              <div className="section-header">
                <h2>الإعدادات العامة</h2>
                <p>إعدادات أساسية للنظام</p>
              </div>
              
              <div className="settings-grid">
                <div className="setting-item">
                  <label className="setting-label">اسم الشركة</label>
                  <input
                    type="text"
                    value={settings.general.companyName}
                    onChange={(e) => handleSettingChange('general', 'companyName', e.target.value)}
                    className="setting-input"
                  />
                </div>

                <div className="setting-item">
                  <label className="setting-label">المنطقة الزمنية</label>
                  <select
                    value={settings.general.timezone}
                    onChange={(e) => handleSettingChange('general', 'timezone', e.target.value)}
                    className="setting-select"
                  >
                    <option value="Asia/Riyadh">الرياض (GMT+3)</option>
                    <option value="Asia/Dubai">دبي (GMT+4)</option>
                    <option value="Africa/Cairo">القاهرة (GMT+2)</option>
                  </select>
                </div>

                <div className="setting-item">
                  <label className="setting-label">اللغة</label>
                  <select
                    value={settings.general.language}
                    onChange={(e) => handleSettingChange('general', 'language', e.target.value)}
                    className="setting-select"
                  >
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div className="setting-item">
                  <label className="setting-label">تنسيق التاريخ</label>
                  <select
                    value={settings.general.dateFormat}
                    onChange={(e) => handleSettingChange('general', 'dateFormat', e.target.value)}
                    className="setting-select"
                  >
                    <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                    <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                    <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'calls' && (
            <div className="settings-section slide-in">
              <div className="section-header">
                <h2>إعدادات المكالمات</h2>
                <p>تخصيص سلوك المكالمات والتسجيل</p>
              </div>
              
              <div className="settings-grid">
                <div className="setting-item">
                  <label className="setting-label">الحد الأقصى لمدة المكالمة (دقيقة)</label>
                  <input
                    type="number"
                    value={settings.calls.maxCallDuration}
                    onChange={(e) => handleSettingChange('calls', 'maxCallDuration', parseInt(e.target.value))}
                    className="setting-input"
                    min="1"
                    max="120"
                  />
                </div>

                <div className="setting-item">
                  <label className="setting-label">مهلة الرنين (ثانية)</label>
                  <input
                    type="number"
                    value={settings.calls.ringTimeout}
                    onChange={(e) => handleSettingChange('calls', 'ringTimeout', parseInt(e.target.value))}
                    className="setting-input"
                    min="10"
                    max="60"
                  />
                </div>

                <div className="setting-item">
                  <label className="setting-label">حد طابور المكالمات</label>
                  <input
                    type="number"
                    value={settings.calls.callQueueLimit}
                    onChange={(e) => handleSettingChange('calls', 'callQueueLimit', parseInt(e.target.value))}
                    className="setting-input"
                    min="10"
                    max="200"
                  />
                </div>

                <div className="setting-item">
                  <label className="setting-label">مهلة التحويل (ثانية)</label>
                  <input
                    type="number"
                    value={settings.calls.transferTimeout}
                    onChange={(e) => handleSettingChange('calls', 'transferTimeout', parseInt(e.target.value))}
                    className="setting-input"
                    min="5"
                    max="30"
                  />
                </div>

                <div className="setting-item full-width">
                  <div className="toggle-setting">
                    <div className="toggle-info">
                      <label className="setting-label">التسجيل التلقائي للمكالمات</label>
                      <p className="setting-description">تسجيل جميع المكالمات تلقائياً لأغراض الجودة والتدريب</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.calls.autoRecording}
                        onChange={(e) => handleSettingChange('calls', 'autoRecording', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'agents' && (
            <div className="settings-section slide-in">
              <div className="section-header">
                <h2>إعدادات الموظفين</h2>
                <p>إدارة سلوك وأداء الموظفين</p>
              </div>
              
              <div className="settings-grid">
                <div className="setting-item">
                  <label className="setting-label">الحد الأقصى للمكالمات المتزامنة</label>
                  <input
                    type="number"
                    value={settings.agents.maxConcurrentCalls}
                    onChange={(e) => handleSettingChange('agents', 'maxConcurrentCalls', parseInt(e.target.value))}
                    className="setting-input"
                    min="1"
                    max="10"
                  />
                </div>

                <div className="setting-item">
                  <label className="setting-label">مدة الاستراحة (دقيقة)</label>
                  <input
                    type="number"
                    value={settings.agents.breakDuration}
                    onChange={(e) => handleSettingChange('agents', 'breakDuration', parseInt(e.target.value))}
                    className="setting-input"
                    min="5"
                    max="60"
                  />
                </div>

                <div className="setting-item">
                  <label className="setting-label">مدة الوردية (ساعة)</label>
                  <input
                    type="number"
                    value={settings.agents.shiftDuration}
                    onChange={(e) => handleSettingChange('agents', 'shiftDuration', parseInt(e.target.value))}
                    className="setting-input"
                    min="4"
                    max="12"
                  />
                </div>

                <div className="setting-item full-width">
                  <div className="toggle-setting">
                    <div className="toggle-info">
                      <label className="setting-label">تتبع الأداء</label>
                      <p className="setting-description">تفعيل مراقبة وتحليل أداء الموظفين</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.agents.performanceTracking}
                        onChange={(e) => handleSettingChange('agents', 'performanceTracking', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="setting-item full-width">
                  <div className="toggle-setting">
                    <div className="toggle-info">
                      <label className="setting-label">تحديث الحالة التلقائي</label>
                      <p className="setting-description">تحديث حالة الموظف تلقائياً حسب نشاط المكالمات</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.agents.autoStatusUpdate}
                        onChange={(e) => handleSettingChange('agents', 'autoStatusUpdate', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-section slide-in">
              <div className="section-header">
                <h2>إعدادات الإشعارات</h2>
                <p>تخصيص أنواع الإشعارات والتنبيهات</p>
              </div>
              
              <div className="settings-grid">
                <div className="setting-item full-width">
                  <div className="toggle-setting">
                    <div className="toggle-info">
                      <label className="setting-label">إشعارات البريد الإلكتروني</label>
                      <p className="setting-description">إرسال إشعارات مهمة عبر البريد الإلكتروني</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.emailNotifications}
                        onChange={(e) => handleSettingChange('notifications', 'emailNotifications', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="setting-item full-width">
                  <div className="toggle-setting">
                    <div className="toggle-info">
                      <label className="setting-label">إشعارات الرسائل النصية</label>
                      <p className="setting-description">إرسال تنبيهات عاجلة عبر الرسائل النصية</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.smsNotifications}
                        onChange={(e) => handleSettingChange('notifications', 'smsNotifications', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="setting-item full-width">
                  <div className="toggle-setting">
                    <div className="toggle-info">
                      <label className="setting-label">الإشعارات الفورية</label>
                      <p className="setting-description">عرض إشعارات فورية في المتصفح</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.pushNotifications}
                        onChange={(e) => handleSettingChange('notifications', 'pushNotifications', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="setting-item full-width">
                  <div className="toggle-setting">
                    <div className="toggle-info">
                      <label className="setting-label">التنبيهات الصوتية</label>
                      <p className="setting-description">تشغيل أصوات تنبيه للأحداث المهمة</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.soundAlerts}
                        onChange={(e) => handleSettingChange('notifications', 'soundAlerts', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>

                <div className="setting-item full-width">
                  <div className="toggle-setting">
                    <div className="toggle-info">
                      <label className="setting-label">تنبيهات المكالمات الفائتة</label>
                      <p className="setting-description">إشعار فوري عند فوات مكالمة مهمة</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.notifications.missedCallAlerts}
                        onChange={(e) => handleSettingChange('notifications', 'missedCallAlerts', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="settings-section slide-in">
              <div className="section-header">
                <h2>إعدادات الأمان</h2>
                <p>تأمين النظام وحماية البيانات</p>
              </div>
              
              <div className="settings-grid">
                <div className="setting-item">
                  <label className="setting-label">مهلة انتهاء الجلسة (دقيقة)</label>
                  <input
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                    className="setting-input"
                    min="15"
                    max="480"
                  />
                </div>

                <div className="setting-item">
                  <label className="setting-label">انتهاء صلاحية كلمة المرور (يوم)</label>
                  <input
                    type="number"
                    value={settings.security.passwordExpiry}
                    onChange={(e) => handleSettingChange('security', 'passwordExpiry', parseInt(e.target.value))}
                    className="setting-input"
                    min="30"
                    max="365"
                  />
                </div>

                <div className="setting-item">
                  <label className="setting-label">محاولات تسجيل الدخول المسموحة</label>
                  <input
                    type="number"
                    value={settings.security.loginAttempts}
                    onChange={(e) => handleSettingChange('security', 'loginAttempts', parseInt(e.target.value))}
                    className="setting-input"
                    min="3"
                    max="10"
                  />
                </div>

                <div className="setting-item full-width">
                  <label className="setting-label">قائمة عناوين IP المسموحة</label>
                  <textarea
                    value={settings.security.ipWhitelist}
                    onChange={(e) => handleSettingChange('security', 'ipWhitelist', e.target.value)}
                    className="setting-textarea"
                    placeholder="192.168.1.1&#10;10.0.0.1&#10;172.16.0.1"
                    rows="4"
                  />
                  <p className="setting-description">أدخل عنوان IP واحد في كل سطر</p>
                </div>

                <div className="setting-item full-width">
                  <div className="toggle-setting">
                    <div className="toggle-info">
                      <label className="setting-label">المصادقة الثنائية</label>
                      <p className="setting-description">تفعيل المصادقة الثنائية لحماية إضافية</p>
                    </div>
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={settings.security.twoFactorAuth}
                        onChange={(e) => handleSettingChange('security', 'twoFactorAuth', e.target.checked)}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
