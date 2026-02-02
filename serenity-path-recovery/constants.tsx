
import React from 'react';
import { Program, Location, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Programs', path: '/programs' },
  { label: 'About', path: '/about' },
  { label: 'Locations', path: '/locations' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Insurance', path: '/insurance' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'drug-addiction',
    title: 'Drug Addiction Treatment',
    description: 'Evidence-based clinical care for chemical dependency.',
    icon: '💊',
    fullDescription: 'Our comprehensive drug rehabilitation program addresses the physical, psychological, and social aspects of substance abuse.',
    whoFor: 'Individuals struggling with prescription meds, stimulants, or opioids.',
    methods: ['CBT', 'DBT', 'Group Therapy', 'Family Counseling'],
  },
  {
    id: 'alcohol-rehab',
    title: 'Alcohol Rehabilitation',
    description: 'Compassionate care for long-term sobriety from alcohol.',
    icon: '🍷',
    fullDescription: 'We provide a structured environment to help you break the cycle of alcohol dependency and rebuild a meaningful life.',
    whoFor: 'Anyone seeking a fresh start and a community of support.',
    methods: ['Medical Detox', 'Relapse Prevention', 'Holistic Therapy'],
  },
  {
    id: 'dual-diagnosis',
    title: 'Dual Diagnosis',
    description: 'Specialized care for co-occurring mental health disorders.',
    icon: '🧠',
    fullDescription: 'Treatment that simultaneously addresses addiction and mental health challenges like depression, anxiety, or PTSD.',
    whoFor: 'Patients with both substance use and psychiatric needs.',
    methods: ['Psychiatric Evaluation', 'Medication Management', 'Trauma-Informed Care'],
  },
  {
    id: 'medical-detox',
    title: 'Medical Detox',
    description: 'Safe, supervised withdrawal under 24/7 medical care.',
    icon: '🏥',
    fullDescription: 'The first step toward recovery involves clearing toxins from the body in a medically monitored clinical setting.',
    whoFor: 'Individuals in the initial phase of quitting substance use.',
    methods: ['24/7 Monitoring', 'Comfort Medications', 'Clinical Support'],
  },
  {
    id: 'residential-care',
    title: 'Inpatient / Residential',
    description: 'Full-immersion recovery in a safe, healing environment.',
    icon: '🏠',
    fullDescription: 'Live-in treatment providing 24-hour support, intensive therapy, and a structured daily routine focused on healing.',
    whoFor: 'Those needing high-intensity support and a stable environment.',
    methods: ['Full-Time Clinical Staff', 'Nutritional Support', 'Structured Scheduling'],
  },
  {
    id: 'outpatient-iop',
    title: 'Outpatient / IOP',
    description: 'Flexible treatment options that fit your daily schedule.',
    icon: '🕒',
    fullDescription: 'Receive high-quality clinical care while maintaining work, school, or family commitments.',
    whoFor: 'Stable individuals transitioning from residential or requiring flexible care.',
    methods: ['Flexible Hours', 'Continued Support', 'Local Community Integration'],
  }
];

export const LOCATIONS: Location[] = [
  {
    city: 'Los Angeles',
    state: 'CA',
    address: '123 Pacific Coast Hwy, Santa Monica, CA 90401',
    phone: '(310) 555-0101',
    image: 'https://picsum.photos/seed/la/800/400'
  },
  {
    city: 'Miami',
    state: 'FL',
    address: '456 Ocean Drive, Miami Beach, FL 33139',
    phone: '(305) 555-0123',
    image: 'https://picsum.photos/seed/miami/800/400'
  },
  {
    city: 'Austin',
    state: 'TX',
    address: '789 Hill Country Ln, Austin, TX 78701',
    phone: '(512) 555-0987',
    image: 'https://picsum.photos/seed/austin/800/400'
  },
  {
    city: 'Phoenix',
    state: 'AZ',
    address: '321 Desert Rose Way, Phoenix, AZ 85001',
    phone: '(602) 555-1234',
    image: 'https://picsum.photos/seed/phoenix/800/400'
  }
];
